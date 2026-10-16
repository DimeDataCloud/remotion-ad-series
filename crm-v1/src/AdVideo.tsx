import { AbsoluteFill, Sequence } from "remotion";
import { BgMesh } from "./components/Background";
import { Grade, Grain, Vignette, FadeToBlack } from "./components/Overlay";
import { Hook } from "./scenes/Hook";
import { Agitate } from "./scenes/Agitate";
import { Solution } from "./scenes/Solution";
import { Proof } from "./scenes/Proof";
import { CTA } from "./scenes/CTA";

const HOOK_START = 0;
const HOOK_LEN = 90;
const AGITATE_START = HOOK_START + HOOK_LEN; // 90
const AGITATE_LEN = 135;
const SOLUTION_START = AGITATE_START + AGITATE_LEN; // 225
const SOLUTION_LEN = 165;
const PROOF_START = SOLUTION_START + SOLUTION_LEN; // 390
const PROOF_LEN = 90;
const CTA_START = PROOF_START + PROOF_LEN; // 480
const CTA_LEN = 60;
const TOTAL = CTA_START + CTA_LEN; // 540

export const AdVideo: React.FC = () => {
  return (
    <AbsoluteFill>
      <BgMesh />

      <Sequence from={HOOK_START} durationInFrames={HOOK_LEN}>
        <Hook />
      </Sequence>
      <Sequence from={AGITATE_START} durationInFrames={AGITATE_LEN}>
        <Agitate />
      </Sequence>
      <Sequence from={SOLUTION_START} durationInFrames={SOLUTION_LEN}>
        <Solution />
      </Sequence>
      <Sequence from={PROOF_START} durationInFrames={PROOF_LEN}>
        <Proof />
      </Sequence>
      <Sequence from={CTA_START} durationInFrames={CTA_LEN}>
        <CTA />
      </Sequence>

      <Grade />
      <Grain />
      <Vignette />
      <FadeToBlack from={TOTAL - 10} to={TOTAL} />
    </AbsoluteFill>
  );
};
