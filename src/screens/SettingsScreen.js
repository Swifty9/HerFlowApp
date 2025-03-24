import { View, Text } from 'react-native';
import { saveUserPreferences, getUserPreferences } from '../lib/storage.js';
import { syncPreferencesToSupabase } from './.env/supabase.js';


const SettingsScreen = () => {
  return (
    <View>
      <Text>Settings Screen</Text>
    </View>
  );
};



export default function SettingsScreen() {
  const [preferences, setPreferences] = useState({ theme: 'dark' });

  // Load preferences when the screen loads
  useEffect(() => {
    const loadPreferences = async () => {
      const storedPreferences = await getUserPreferences();
      if (storedPreferences) {
        setPreferences(storedPreferences);
      }
    };
    loadPreferences();
  }, []);

  // Save preferences locally and sync to Supabase
  const handleSavePreferences = async () => {
    await saveUserPreferences(preferences);
    await syncPreferencesToSupabase('user-id', preferences); // Replace with actual user ID
  };

  return (
    <View>
      <Text>Current Theme: {preferences.theme}</Text>
      <Button title="Save Preferences" onPress={handleSavePreferences} />
    </View>
  );
}