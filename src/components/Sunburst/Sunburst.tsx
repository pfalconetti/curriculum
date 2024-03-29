// ref: https://nivo.rocks/sunburst/

import React from "react";

// install (please make sure versions match peerDependencies)
// yarn add @nivo/core @nivo/sunburst
import { ResponsiveSunburst } from '@nivo/sunburst';
import data from "../../assets/data/sunburstData.json";

// make sure parent container have a defined height when using
// responsive component, otherwise height will be 0 and
// no chart will be rendered.
// website examples showcase many properties,
// you'll often use just a few of them.
function Sunburst() {
  return (
    <ResponsiveSunburst
      data={data}
      margin={{ top: 10, right: 10, bottom: 10, left: 10 }}
      id="name"
      value="loc"
      cornerRadius={2}
      borderColor={{ theme: 'background' }}
      colors={{ scheme: 'nivo' }}
      childColor={{
        from: 'color',
        modifiers: [
          [
            'brighter',
            0.1
          ]
        ]
      }}
      enableArcLabels={true}
      arcLabelsSkipAngle={10}
      arcLabelsTextColor={{
        from: 'color',
        modifiers: [
          [
            'darker',
            1.4
          ]
        ]
      }}
    />
  )
}

export default Sunburst;