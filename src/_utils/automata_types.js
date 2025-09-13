import {
	FaArrowDown,
	FaArrowLeft,
	FaArrowRight,
	FaArrowUp,
} from "react-icons/fa6";
import { GiLifeBar, GiBrain } from "react-icons/gi";
import { HiMiniBugAnt } from "react-icons/hi2";
import { PiCircuitryFill } from "react-icons/pi";

const AUTOMATAS = {
	"Langton's Ant": {
		info: "Ant flips tiles, turns, repeats",
		icon: HiMiniBugAnt,
		inactive_cells: ["Black Cell", "White Cell"],
		death_note: "The ants saw the edge of the world... and kept going.",
		death_emoji: "🐜",
		default_cell: "Black Cell",
		initial_create_cell: "White Cell Forward",
		active_cell: "White Cell",
		inactive_cell: "Black Cell",
		cells: {
			"Black Cell Forward": {
				name: "Ant on Black Cell",
				color: "black",
				icon: FaArrowUp,
				info: "Turn left, flip cell to white and move forward",
			},
			"Black Cell Backward": {
				color: "black",
				icon: FaArrowDown,
				visible: false,
			},
			"Black Cell Left": {
				color: "black",
				icon: FaArrowLeft,
				visible: false,
			},
			"Black Cell Right": {
				color: "black",
				icon: FaArrowRight,
				visible: false,
			},
			"White Cell Forward": {
				name: "Ant on White Cell",
				icon: FaArrowUp,
				color: "white",
				info: "Turn right, flip cell to black and move forward",
			},
			"White Cell Backward": {
				icon: FaArrowDown,
				color: "white",
				visible: false,
			},
			"White Cell Left": {
				icon: FaArrowLeft,
				color: "white",
				visible: false,
			},
			"White Cell Right": {
				icon: FaArrowRight,
				color: "white",
				visible: false,
			},
			"Black Cell": {
				color: "black",
				visible: false,
			},
			"White Cell": {
				color: "white",
				visible: false,
			},
		},
		description: [
			"Welcome to Langton's Ant!",
			"You’re not just anyone: you’re the Queen Ant of this dark, pixelated void!",
			"With a flick of your royal feelers, you summon worker ants from the abyss. Their job? Dig tunnels. Endlessly. For... reasons",
			"At each step, these little overachievers follow one simple rule: 'If the floor looks weird, turn!' (Honestly, they’re not the brightest.)",
			"Now sit back, your Majesty, and watch your loyal minions chaotically carve out the most unexpectedly artsy ant colony in existence.",
			"Let the weirdness begin!",
		],
	},
	"Conway's Game of Life": {
		icon: GiLifeBar,
		inactive_cells: ["Dead Cell"],
		death_note: "Whoops! All cells died. Only ghost remains",
		death_emoji: "👻",
		info: "Cells live or die by neighbors",
		default_cell: "Dead Cell",
		initial_create_cell: "Alive Cell",
		active_cell: "Alive Cell",
		inactive_cell: "Dead Cell",
		cells: {
			"Dead Cell": {
				color: "black",
				info: "Becomes alive if 3 alive neighbours",
			},
			"Alive Cell": {
				color: "yellow",
				info: "Lives if 2 or 3 alive neighbours",
			},
		},
		description: [
			"Conway's Game of Life is a perfect example of complex patterns emerging from simple rules.",
			"There are two kinds of cells: white for life, black for death. It's a binary world - but don't worry, you're the god here.",
			"You have the divine power to breathe life into this dark, lifeless grid. With a flick of your cursor, you can create patterns - some that flourish, some that fizzle out, and others that settle into peaceful stability.",
			"The game is entirely deterministic, yet predicting the outcome without running the simulation? Practically divine guesswork. So go ahead and say, ‘Let there be life,’ and watch as your world unfold.",
		],
	},
	"Brian's Brain": {
		info: "Cells flash, then cool down",
		icon: GiBrain,
		default_cell: "Dead Cell",
		inactive_cells: ["Dead Cell"],
		death_note: "Whoops! All cells died. Only ghost remains.",
		death_emoji: "👻",
		initial_create_cell: "Alive Cell",
		active_cell: "Alive Cell",
		inactive_cell: "Dead Cell",
		cells: {
			"Dead Cell": {
				color: "black",
				info: "Becomes alive if 2 alive neighbours",
			},
			"Alive Cell": {
				color: "yellow",
				info: "Becomes dying cell",
			},
			"Dying Cell": {
				color: "grey",
				info: "Becomes dead cell",
			},
		},
		description: [
			"Welcome to Brian’s Brain!",
			"Somehow, you’ve found yourself in the neural fever dream of a guy named Brian. Don’t ask who Brian is. No one really knows. Maybe even Brian doesn’t know.",
			"Here, cells don’t just live or die. Oh no—we’re way past that. These cells are either: Firing (zap zap), Ready to fire, or Recovering from being too awesome.",
			"It’s basically a universe where every cell goes through a three-step existential crisis... and then repeats it forever.",
			"There’s no goal, no score, no “You Win” screen. Just endless electrical chaos.",
			"So go ahead fire up the simulation, and enjoy watching a digital brain that thinks it's doing something important.",
			"Spoiler: It isn’t. But it looks cool.",
		],
	},
	"Wire World": {
		info: "Electrons move through wires",
		icon: PiCircuitryFill,
		default_cell: "Empty Cell",
		initial_create_cell: "Conductor",
		inactive_cells: ["Empty Cell"],
		death_note: "Electron party's over. Wireworld is now Napworld.",
		death_emoji: "⚡",
		active_cell: "Conductor",
		inactive_cell: "Electron Head",
		cells: {
			"Empty Cell": {
				color: "black",
				info: "An empty cell",
			},
			"Electron Head": {
				color: "blue",
				info: "Becomes electron tail",
			},
			"Electron Tail": {
				color: "Red",
				info: "Becomes conductor",
			},
			Conductor: {
				color: "Yellow",
				info: "Becomes electron head if 1 or 2 neighbours",
			},
		},
		description: [
			"Welcome to Wireworld!",
			"You’re not just playing a game, you’re an electric wizard in a universe where electrons move slow just for you. Time to bend lightning to your will.",
			"Lay down conductors (a.k.a. glorified copper noodles), guide the flow of electrons—watch them morph from electron heads to electron tails like obedient little sparks—and design circuits that do whatever your chaotic mind desires.",
			"There are no rules. No limits. Build logic gates. Craft a calculator. Or go full mad scientist and construct a tiny, barely-functioning computer that questions its own existence.",
			"The sky’s the limit...",
		],
	},
};

export function get_automata_info(automata) {
	return AUTOMATAS[automata];
}

export function get_all_automata() {
	return Object.fromEntries(
		Object.entries(AUTOMATAS).map(([name, data]) => [
			name,
			{
				icon: data.icon,
				info: data.info,
			},
		])
	);
}

export function get_automata_cell_type(automata) {
	const automata_cells = AUTOMATAS[automata].cells;

	const filtered_automata_cells = Object.fromEntries(
		Object.entries(automata_cells).filter(
			([_, meta]) => meta["visible"] ?? true
		)
	);
	return filtered_automata_cells;
}
