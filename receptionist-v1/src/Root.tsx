import { Composition } from "remotion";
import { AdVideo } from "./AdVideo";

export const RemotionRoot: React.FC = () => {
  return (
    <Composition
      id="DimeDataReceptionistAd"
      component={AdVideo}
      durationInFrames={540}
      fps={30}
      width={1080}
      height={1920}
    />
  );
};
