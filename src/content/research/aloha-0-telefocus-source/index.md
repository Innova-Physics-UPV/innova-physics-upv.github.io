---
# Placeholder content until the team's content document (poster text,
# authors, venue link, PDF): see docs/content-todo.md.
title: "ALOHA-0: a telefocus electron source for a tabletop linac"
type: poster
authors:
  - Innova Physics UPV
venue:
  name: accelECR poster session · CERN
date: 2026-07-02
status: presented
aside: A triode that focuses its beam beyond the anode.
picture:
  kind: figure
  figure: aloha-0-line
  caption:
    lead: The electron source on its beam.
    text: Simulated electrodes hatched, the planned einzel lens outlined. Schematic.
machine: ALOHA-0
numbers: SIMULATED · COMSOL
---

The first stage of ALOHA is a thermionic telefocus triode: a tungsten cathode, a Wehnelt cylinder and an anode, designed and simulated in COMSOL.

## Geometry

The Wehnelt's bias shapes the emission into a converging beam whose focus lies far beyond the anode. An einzel lens, planned, refocuses it for the stages that follow.

## Simulation

At an extraction voltage of 30&nbsp;kV (simulated) the model gives a beam current of 1.5&nbsp;mA (simulated) and a symmetric spot under 1&nbsp;mm (simulated). Its perveance,

$$
P = \frac{I}{V^{3/2}} \approx 2.9 \times 10^{-10}\ \mathrm{A\,V^{-3/2}}\ \text{(simulated)},
$$

is small: at this current, space charge barely shapes the beam.

## Next

A vacuum bench and the cathode supply, to measure what the simulation predicts.
