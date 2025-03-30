import React from 'react';
import { View, Text, StyleSheet, SafeAreaView } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

export default function VerifiedScreen() {
  return (
    <SafeAreaView style={styles.container}>
      {/* Logo */}
      <View style={styles.logoCircle}>
        <Text style={styles.logoText}>LOGO</Text>
      </View>

      {/* Profile Info */}
      <View style={styles.profileRow}>
        <Ionicons name="person-circle-outline" size={40} color="#3E4A5A" />
        <View style={{ marginLeft: 10 }}>
          <View style={styles.nameRow}>
            <Text style={styles.nameText}>Hi, Name</Text>
            <Ionicons name="checkmark-circle" size={16} color="#FE712D" style={{ marginLeft: 4 }} />
          </View>
          <Text style={styles.phoneText}>+63922*****5100</Text>
        </View>

        {/* Optional square image placeholder */}
        <View style={styles.squareBox} />
      </View>

      {/* Add additional verified content here */}
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFBFC',
    padding: 24,
  },
  logoCircle: {
    width: 60,
    height: 60,
    borderRadius: 30,
    backgroundColor: '#D0D7DF',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 20,
  },
  logoText: {
    fontWeight: 'bold',
    color: '#3E4A5A',
    fontSize: 14,
  },
  profileRow: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  nameRow: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  nameText: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#FE712D',
  },
  phoneText: {
    fontSize: 12,
    color: '#5B6B7F',
    marginTop: 2,
  },
  squareBox: {
    width: 60,
    height: 40,
    borderColor: '#999',
    borderWidth: 1,
    borderRadius: 4,
  },
});
