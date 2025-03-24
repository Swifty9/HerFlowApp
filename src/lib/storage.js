const savePreferences = async (preferences) => {
    try {
      const jsonValue = JSON.stringify(preferences);
      await AsyncStorage.setItem('userPreferences', jsonValue);
      console.log('Preferences saved!');
    } catch (error) {
      console.error('Error saving preferences:', error);
    }
  };
  