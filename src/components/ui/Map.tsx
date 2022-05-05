import React from "react";
import "./Map.css";
import { Stage, Layer, Rect, Text, Line, Group } from "react-konva";
const lc = require("lc_call_number_compare");

type Array<T> = ReadonlyArray<T>;

const LIBRARY: Array<LeftRight<Array<Bounds>>> = require("./map.json");
const DEFAULT_SHELF_WIDTH = 90;
const MINIMUM_SHELF_HEIGHT = 50;
const DEFAULT_SHELF_TEXT_COLOR = "white";
const DEFAULT_FONT_FAMILY = "monospace";
const BOOK_COLORS = ["eaeaea", "7583ce", "5063ce", "2039c9"];
const AISLE_HEIGHT = 10;
const AISLE_WIDTH = 10;

const LONGEST_SHELF_LENGTH = Math.max(
    ...LIBRARY.map((x: LeftRight<Array<Bounds>>) =>
        Math.max(x.left.length, x.right.length)
    )
);

function pick_color(n: number) {
    return "#" + (BOOK_COLORS[n]
        ? BOOK_COLORS[n]
        : BOOK_COLORS[BOOK_COLORS.length - 1]);
}

interface Bounds {
    readonly min: string;
    readonly max: string;
}

interface BookI {
    readonly call_no: string;
}

interface ShelfI {
    readonly x: number;
    readonly y: number;
    readonly width: number;
    readonly height: number;
    readonly left_bounds: Printable | null;
    readonly right_bounds: Printable | null;
    readonly left_color: string;
    readonly right_color: string;
}

interface LeftRight<T> {
    readonly left: T;
    readonly right: T;
}

interface Printable {
    readonly bounds: Bounds;
    readonly count: number;
}

function betweenLC(b: Bounds, x: string) {
    return lc.lte(x, b.max) && lc.gte(x, b.min);
}

function Shelf(s: ShelfI) {
    return (
        <Group>
            <Rect
                x={s.x}
                y={s.y}
                width={s.width / 2}
                height={s.height}
                fill={s.left_color}
            />
            <Rect
                x={s.x + s.width / 2}
                y={s.y}
                width={s.width / 2}
                height={s.height}
                fill={s.right_color}
            />
            <Text
                fill={DEFAULT_SHELF_TEXT_COLOR}
                x={s.x}
                y={s.y + s.height / 2}
                width={s.width / 2}
                text={boundify(s.left_bounds)}
                fontFamily={DEFAULT_FONT_FAMILY}
                align="center"
            />
            <Text
                fill={DEFAULT_SHELF_TEXT_COLOR}
                x={s.x + s.width / 2}
                width={s.width / 2}
                y={s.y + s.height / 2}
                text={boundify(s.right_bounds)}
                fontFamily={DEFAULT_FONT_FAMILY}
                align="center"
            />
            <Line
                x={s.x + s.width / 2}
                y={s.y}
                // Read this as
                // Line between (0, 0) and (0, s.height)
                points={[0, 0, 0, s.height]}
                stroke="black"
            />
        </Group>
    );
}

function boundify(b: Printable | null) {
    return b ? b.bounds.min + "-" + b.bounds.max : "";
}

function Row(r: LeftRight<Array<Printable>>, x: number) {
    const screen_based_height =
        Math.floor(window.innerHeight / (LONGEST_SHELF_LENGTH + 1)) -
        AISLE_HEIGHT;
    const height =
        screen_based_height < MINIMUM_SHELF_HEIGHT
            ? MINIMUM_SHELF_HEIGHT
            : screen_based_height;

    return (
        <Group>
            {[...Array(r.left.length)].map((_, i) => (
                <Shelf
                    x={x}
                    y={i * (height + AISLE_HEIGHT)}
                    width={DEFAULT_SHELF_WIDTH}
                    height={height}
                    left_bounds={r.left[i]}
                    right_bounds={r.right[i]}
                    left_color={
                        pick_color(r.left[i].count)
                    }
                    right_color={
                        pick_color(r.right[i].count)
                    }
                />
            ))}
        </Group>
    );
}

function lrmap<T, U>(lr: LeftRight<T>, f: (a: T) => U) {
    return {
        left: f(lr.left),
        right: f(lr.right),
    };
}

function Map(books: Array<BookI> | null) {
    // The infered type doesn't use constants, so it needs to be written out
    // books = BOOKS;
    const with_counts: Array<LeftRight<Array<Printable>>> = LIBRARY.map((row) =>
        lrmap(row, (side) =>
            side.map((shelf) => ({
                bounds: shelf,
                count: (books ? books : []).filter((book) =>
                    betweenLC(shelf, book.call_no)
                ).length,
            }))
        )
    );

    return (
        <Stage
            width={
                (4 + with_counts.length) * (AISLE_WIDTH + DEFAULT_SHELF_WIDTH)
            }
            height={window.innerHeight}
        >
            <Layer>
                {with_counts.map((row, i) =>
                    Row(row, (AISLE_WIDTH + DEFAULT_SHELF_WIDTH) * (i + 1))
                )}
            </Layer>
        </Stage>
    );
}

export default Map;
