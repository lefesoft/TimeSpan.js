declare module 'timespan' {
    export class TimeSpan {
    constructor(milliseconds: number, seconds: number, minutes: number, hours: number, days: number);
    add(timeSpan: TimeSpan): void;
    addMilliseconds(milliseconds: number): void;
    addSeconds(seconds: number): void;
    addMinutes(minutes: number): void;
    addHours(hours: number): void;
    addDays(days: number): void;
    subtract(timeSpan: TimeSpan): void;
    subtractMilliseconds(milliseconds: number): void;
    subtractSeconds(seconds: number): void;
    subtractMinutes(minutes: number): void;
    subtractHours(hours: number): void;
    subtractDays(days: number): void;
    totalMilliseconds(roundDown: boolean): number;
    totalSeconds(roundDown: boolean): number;
    totalMinutes(roundDown: boolean): number;
    totalHours(roundDown: boolean): number;
    totalDays(roundDown: boolean): number;
    
        equals(timeSpan: TimeSpan): boolean;
        toString(): string;
    
        readonly milliseconds: number;
        readonly seconds: number;
        readonly minutes: number;
        readonly hours: number;
        readonly days: number;
    }
    export function fromMilliseconds(milliseconds: number): TimeSpan;
    export function fromSeconds(seconds: number): TimeSpan;
    export function fromMinutes(minutes: number): TimeSpan;
    export function fromHours(hours: number): TimeSpan;
    export function fromDays(days: number): TimeSpan;
    export function parse(str: string): TimeSpan;
    export function parseDate(str: string): Date;
    export function fromDates(start: string | Date, end: string | Date, abs: boolean): TimeSpan;
    export function test(str: string): boolean;
    export function instanceOf(timeSpan: any): boolean;
    export function clone(timeSpan: TimeSpan): TimeSpan;
    }