import React, { useState } from 'react';
import { View, Text, StyleSheet, Dimensions, ScrollView, TouchableOpacity } from 'react-native';
import { BarChart, PieChart } from 'react-native-chart-kit';

const screenWidth = Dimensions.get('window').width;

const SalesChartApp = () => {
  const [selectedPeriod, setSelectedPeriod] = useState('semanal');

  // Datos para las gráficas
  const salesData = {
    semanal: {
      labels: ['Lun', 'Mar', 'Mié', 'Jue', 'Vie', 'Sáb', 'Dom'],
      data: [120, 150, 170, 200, 250, 300, 180],
    },
    mensual: {
      labels: ['Semana 1', 'Semana 2', 'Semana 3', 'Semana 4'],
      data: [800, 900, 750, 950],
    },
    anual: {
      labels: ['Ene', 'Feb', 'Mar', 'Abr', 'May', 'Jun', 'Jul', 'Ago', 'Sep', 'Oct', 'Nov', 'Dic'],
      data: [5000, 4800, 5200, 5300, 5600, 5900, 6000, 6100, 6200, 6400, 6500, 7000],
    },
  };

  const pieData = salesData[selectedPeriod].data.map((value, index) => ({
    name: salesData[selectedPeriod].labels[index],
    value,
    color: `rgba(${Math.floor(Math.random() * 256)}, ${Math.floor(Math.random() * 256)}, ${Math.floor(Math.random() * 256)}, 0.8)`,
    legendFontColor: '#000',
    legendFontSize: 12,
  }));

  const chartConfig = {
    backgroundGradientFrom: '#ffffff',
    backgroundGradientTo: '#ffffff',
    color: (opacity = 1) => `rgba(0, 0, 0, ${opacity})`,
    labelColor: (opacity = 1) => `rgba(0, 0, 0, ${opacity})`,
    strokeWidth: 2,
    barPercentage: 0.5,
  };

  return (
    <ScrollView style={styles.container}>
      <Text style={styles.title}>Gráficas de Ventas</Text>
      
      {/* Selector de periodo */}
      <View style={styles.periodSelector}>
        {['semanal', 'mensual', 'anual'].map((period) => (
          <TouchableOpacity
            key={period}
            style={[
              styles.periodButton,
              selectedPeriod === period && styles.selectedButton,
            ]}
            onPress={() => setSelectedPeriod(period)}
          >
            <Text style={styles.periodText}>{period.toUpperCase()}</Text>
          </TouchableOpacity>
        ))}
      </View>

      {/* Gráfica de barras */}
      <Text style={styles.subtitle}>Gráfica de Barras</Text>
      <BarChart
        data={{
          labels: salesData[selectedPeriod].labels,
          datasets: [{ data: salesData[selectedPeriod].data }],
        }}
        width={screenWidth - 20}
        height={220}
        chartConfig={chartConfig}
        style={styles.chart}
      />

      {/* Gráfica de pastel */}
      <Text style={styles.subtitle}>Gráfica Circular</Text>
      <PieChart
        data={pieData}
        width={screenWidth - 20}
        height={220}
        chartConfig={chartConfig}
        accessor={'value'}
        backgroundColor={'transparent'}
        paddingLeft={'15'}
        center={[0, 0]}
        absolute
        style={styles.chart}
      />
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
    backgroundColor: '#f5f5f5',
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 10,
  },
  subtitle: {
    fontSize: 16,
    fontWeight: 'bold',
    marginVertical: 10,
  },
  chart: {
    borderRadius: 8,
    marginVertical: 10,
  },
  periodSelector: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginVertical: 10,
  },
  periodButton: {
    padding: 10,
    marginHorizontal: 5,
    borderRadius: 5,
    backgroundColor: '#ccc',
  },
  selectedButton: {
    backgroundColor: '#007BFF',
  },
  periodText: {
    color: '#fff',
    fontWeight: 'bold',
  },
});

export default SalesChartApp;
