import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {LineChart, Grid, YAxis, XAxis} from 'react-native-svg-charts';
import * as shape from 'd3-shape';

export default function Grafico() {
  const data = [10, 0, 0, 0, 0, 0, 1, 30, 15, 15, 40, 10, 20];

  return (
    <View style={styles.container}>
      <Text style={styles.textContainer}>Gráfico</Text>
      <View style={styles.chartContainer}>
        <YAxis
          data={data}
          contentInset={{top: 20, bottom: 20}}
          svg={{
            fill: 'grey',
            fontSize: 10,
          }}
          numberOfTicks={10}
          formatLabel={(value) => `${value}`}
        />
        <View style={{flex: 1, marginLeft: 10}}>
          <LineChart
            style={{flex: 1}}
            data={data}
            svg={{stroke: 'rgb(134, 65, 244)'}}
            contentInset={{top: 20, bottom: 20}}
            curve={shape.curveNatural}
          >
            <Grid />
          </LineChart>
          <XAxis
            style={{marginHorizontal: -10}}
            data={data}
            formatLabel={(value, index) => index}
            contentInset={{left: 10, right: 10}}
            svg={{fontSize: 10, fill: 'black'}}
          />
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    margin: 20,
    justifyContent: 'center',
  },
  textContainer: {
    fontSize: 30,
    fontWeight: 'bold',
    color: 'black',
    textAlign: 'center',
    marginBottom: 20,
  },
  chartContainer: {
    height: 400,
    flexDirection: 'row',
  },
});
