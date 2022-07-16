// ref: https://nivo.rocks/pie/

import React from "react";

// install (please make sure versions match peerDependencies)
// yarn add @nivo/core @nivo/pie
import { ResponsivePie } from '@nivo/pie'
import data from "../../assets/data/prettyDonutData.json";

// make sure parent container have a defined height when using
// responsive component, otherwise height will be 0 and
// no chart will be rendered.
// website examples showcase many properties,
// you'll often use just a few of them.
function PrettyDonut() {
  return (
    <ResponsivePie
      data={data}
      margin={{ top: 32, right: 80, bottom: 32, left: 80 }}
      startAngle={135}
      endAngle={-180}
      innerRadius={0.7}
      padAngle={1}
      activeOuterRadiusOffset={10}
      colors={{ scheme: 'set3' }}
      borderColor={{ theme: 'background' }}
      arcLinkLabelsSkipAngle={10}
      arcLinkLabelsTextColor={{ theme: 'labels.text.fill' }}
      arcLinkLabelsColor={{ theme: 'grid.line.stroke' }}
      enableArcLabels={false}
      arcLabelsRadiusOffset={0.45}
      arcLabelsSkipAngle={10}
      arcLabelsTextColor={{
        from: 'color',
        modifiers: [
          [
            'darker',
            2
          ]
        ]
      }}
      defs={[
        {
          id: 'dots',
          type: 'patternDots',
          background: 'inherit',
          color: 'rgba(255, 255, 255, 0.3)',
          size: 4,
          padding: 1,
          stagger: true
        },
        {
          id: 'lines',
          type: 'patternLines',
          background: 'inherit',
          color: 'rgba(255, 255, 255, 0.3)',
          rotation: -45,
          lineWidth: 6,
          spacing: 10
        }
      ]}
      fill={[
        {
          match: {
            id: 'Sage'
          },
          id: 'dots'
        },
        {
          match: {
            id: 'Claranet'
          },
          id: 'dots'
        },
        {
          match: {
            id: 'Long²'
          },
          id: 'lines'
        },
        {
          match: {
            id: 'Agarik'
          },
          id: 'lines'
        }
      ]}
      legends={[
        {
          anchor: 'left',
          direction: 'column',
          justify: false,
          translateX: 0,
          translateY: 0,
          itemsSpacing: 0,
          itemWidth: 10,
          itemHeight: 32,
          itemTextColor: '#999',
          itemDirection: 'left-to-right',
          itemOpacity: 1,
          symbolSize: 25,
          symbolShape: 'circle',
          effects: [
            {
              on: 'hover',
              style: {
                itemTextColor: '#000'
              }
            }
          ]
        }
      ]}
    />
  );
}

export default PrettyDonut;