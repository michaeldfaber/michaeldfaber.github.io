export class Color {
    public r: number;
    public g: number;
    public b: number;
    public color: string;

    constructor(r: number, g: number, b: number) {
        this.r = r;
        this.g = g;
        this.b = b;
        this.color = this.toString();

        this.white = this.white.bind(this);
        this.black = this.black.bind(this);
    }

    public toString(): string {
        return `rgb(${this.r},${this.g},${this.b})`;
    }

    public white(power: number): void {
        for (let i = 0; i < power; i++) {
            if (this.r < 255) this.r++;
            if (this.g < 255) this.g++;
            if (this.b < 255) this.b++;
        }

        this.color = this.toString();
    }

    public black(power: number): void {
        for (let i = 0; i < power; i++) {
            if (this.r > 0) this.r--;
            if (this.g > 0) this.g--;
            if (this.b > 0) this.b--;
        }

        this.color = this.toString();
    }

    public red(power: number): void { 
        for (let i = 0; i < power; i++) {
            if (this.r < 255) {
                this.r++;
            } else {
                if (this.g > 0) this.g--;
                if (this.b > 0) this.b--;
            }
        }

        this.color = this.toString();
    };

    public green(power: number): void {
        for (let i = 0; i < power; i++) {
            if (this.g < 255) {
                this.g++;
            } else {
                if (this.r > 0) this.r--;
                if (this.b > 0) this.b--;
            }
        }

        this.color = this.toString();
    };

    public blue(power: number): void { 
        for (let i = 0; i < power; i++) {
            if (this.b < 255) {
                this.b++;
            } else {
                if (this.r > 0) this.r--;
                if (this.g > 0) this.g--;
            }
        }

        this.color = this.toString();
    };

    public static getRandom(): Color {
        return new Color(
            Math.floor((Math.random() * 255) + 1),
            Math.floor((Math.random() * 255) + 1),
            Math.floor((Math.random() * 255) + 1),
        );
    }
}