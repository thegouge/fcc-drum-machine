// actual drum sounds
import eight08 from "./drumSounds/realDrums/808.wav";
import bassC from "./drumSounds/realDrums/Bass-C.wav";
import bassCSharp from "./drumSounds/realDrums/Bass-Cs.wav";
import openHat1 from "./drumSounds/realDrums/OpenHat.wav";
import ride from "./drumSounds/realDrums/Ride.wav";
import crash from "./drumSounds/realDrums/Crash.wav";
import hat1 from "./drumSounds/realDrums/Hat.wav";
import kick1 from "./drumSounds/realDrums/Kick.wav";
import clap from "./drumSounds/realDrums/Clap.wav";

// beatbox drum sounds
import bbKick from "./drumSounds/beatBox/bb-kick.wav";
import bbSnare from "./drumSounds/beatBox/bb-snare.wav";
import bbHat from "./drumSounds/beatBox/bb-hiHat.wav";
import bbOpenHat from "./drumSounds/beatBox/bb-openHat.wav";
import bbRide from "./drumSounds/beatBox/bb-ride.wav";
import bbCrash from "./drumSounds/beatBox/bb-Crash.wav";
import bbSuck from "./drumSounds/beatBox/bb-suck.wav";
import bbMachGun from "./drumSounds/beatBox/bb-machineGun.wav";
import bbFlange from "./drumSounds/beatBox/bb-flange.wav";

const bankObject = {
  default: [
    {letter: "Q", description: "Closed Hi-Hat", sound: hat1},
    {letter: "W", description: "Kick Drum", sound: kick1},
    {letter: "E", description: "Snare", sound: clap},
    {letter: "A", description: "Open Hi-Hat", sound: openHat1},
    {letter: "S", description: "Ride Cymbal", sound: ride},
    {letter: "D", description: "Crash Cymbal", sound: crash},
    {letter: "Z", description: "808", sound: eight08},
    {letter: "X", description: "Bass (C)", sound: bassC},
    {letter: "C", description: "Bass (C#)", sound: bassCSharp}
  ],
  beatBox: [
    {letter: "Q", description: "Closed Hi-Hat", sound: bbHat},
    {letter: "W", description: "Kick Drum", sound: bbKick},
    {letter: "E", description: "Snare", sound: bbSnare},
    {letter: "A", description: "Open Hi-Hat", sound: bbOpenHat},
    {letter: "S", description: "Ride Cymbal", sound: bbRide},
    {letter: "D", description: "Crash Cymbal", sound: bbCrash},
    {letter: "Z", description: "Sucking in a breath", sound: bbSuck},
    {letter: "X", description: "Multihit?", sound: bbMachGun},
    {letter: "C", description: "Flange... Thing?", sound: bbFlange}
  ]
};

export default bankObject;
