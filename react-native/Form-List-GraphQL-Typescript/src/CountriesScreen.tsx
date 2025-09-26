import React, { useState } from "react";
import {
  View,
  Text,
  FlatList,
  ActivityIndicator,
  ScrollView,
  TextInput,
  Button,
} from "react-native";
import { gql } from "@apollo/client";
import { useQuery } from "@apollo/client/react";
import Display from "./Display";

const countries = gql`
  query {
    countries {
      code
      name
      emoji
    }
  }
`;

interface Country {
  code: string;
  name: string;
  emoji: string;
}

interface FormData {
  name: string;
  email: string;
  age: string;
}

const CountriesScreen: React.FC = () => {
  const { loading, error, data } = useQuery<{ countries: Country[] }>(
    countries
  );

  if (error) {
    return <ActivityIndicator size="large" />;
  }

  const [formData, setFormData] = useState<FormData>({
    name: "",
    email: "",
    age: "",
  });

  const handleChange = (key: keyof FormData, value: string) => {
    setFormData((prev) => ({ ...prev, [key]: value }));
  };

  const handleSubmit = () => {
    console.log("Form submitted:", formData);
    alert(JSON.stringify(formData, null, 2));
  };

  return (
    <ScrollView>
      <View>
        <Text>Countries Screen 3</Text>
        <View>
          <Text>Name</Text>
          <TextInput
            placeholder="Enter name"
            value={formData.name}
            onChangeText={(text) => handleChange("name", text)}
          />

          <Text>Email</Text>
          <TextInput
            placeholder="Enter email"
            value={formData.email}
            onChangeText={(text) => handleChange("email", text)}
            keyboardType="email-address"
          />

          <Text>Age</Text>
          <TextInput
            placeholder="Enter age"
            value={formData.age}
            onChangeText={(text) => handleChange("age", text)}
            keyboardType="numeric"
          />

          <Button title="Submit" onPress={handleSubmit} />

          <Display name={formData.name} />
        </View>
        <View>
          <FlatList
            data={data?.countries}
            renderItem={({ item }) => {
              return (
                <View>
                  <Text>{item.name}</Text>
                </View>
              );
            }}
          />
        </View>
      </View>
    </ScrollView>
  );
};

export default CountriesScreen;
