import { useState } from 'react';
import { StyleSheet } from 'react-native';
import { ThemedText } from '@/components/themed-text';
import { ThemedView } from '@/components/themed-view';
import { Button } from '@/components/ui/button';

export default function HomeScreen() {
  const [lastPeriodDate, setLastPeriodDate] = useState<Date | null>(null);
  const [hasPeriodToday, setHasPeriodToday] = useState<boolean>(false);

  const logPeriod = () => {
    setLastPeriodDate(new Date());
    setHasPeriodToday(true);
  };

  const getPeriodStatusText = () => {
    if (hasPeriodToday) {
      return 'You are currently on your period.';
    } else if (lastPeriodDate) {
      return `Last period logged on: ${lastPeriodDate.toDateString()}`;
    } else {
      return 'No period logged yet. Log your first period!';
    }
  };

  return (
    <ThemedView style={styles.container}>
      <ThemedText type="title" style={styles.title}>Period Tracker</ThemedText>

      <ThemedView style={styles.statusContainer}>
        <ThemedText style={styles.statusText}>{getPeriodStatusText()}</ThemedText>
      </ThemedView>

      <Button title={hasPeriodToday ? "Period Logged Today" : "Log Period Today"} onPress={logPeriod} />
    </ThemedView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
  },
  title: {
    fontSize: 24,
    marginBottom: 20,
  },
  statusContainer: {
    marginBottom: 30,
    alignItems: 'center',
  },
  statusText: {
    fontSize: 18,
    textAlign: 'center',
  },
});
