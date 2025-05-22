import MovieCard from "@/src/components/MovieCard";
import { fetchMovie } from "@/src/services/api";
import useFetch from "@/src/services/useFetch";
import { useRouter } from "expo-router";
import React, { useState } from "react";
import {
  ActivityIndicator,
  FlatList,
  Image,
  ScrollView,
  Text,
  View,
} from "react-native";
import { Searchbar } from "react-native-paper";

const Index = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const router = useRouter();
  const {
    data: movie,
    loading: movieLoading,
    error: movieError,
  } = useFetch(() => fetchMovie({ query: "" }));
  return (
    <View className="flex-1 bg-primary">
      <ScrollView
        className="flex-1 mx-5 "
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{
          minHeight: "100%",
          paddingBottom: 10,
        }}
      >
        <Image
          source={require("../../assets/images/app_image.png")}
          className=" w-12 h-10 mt-20 mb-5 mx-auto"
        />

        {movieLoading ? (
          <ActivityIndicator
            size="large"
            color="#0000ff"
            className="mt-10 self-center"
          />
        ) : movieError ? (
          <Text>Error :{movieError?.message}</Text>
        ) : (
          <View>
            <Searchbar
              placeholder="Search"
              onChangeText={setSearchQuery}
              value={searchQuery}
              onPress={() => router.push("/search")}
            />
            <>
              <Text className="font-bold font-white  text-xl mt-5 mb-4">
                Latest Movies
              </Text>
              <FlatList
                data={movie}
                renderItem={({ item }) => {
                  
                  return < MovieCard item={item}/>;
                }}
                keyExtractor={(item) => item.id.toString()}
                numColumns={3}
                columnWrapperStyle={{
                  justifyContent: "flex-start",
                  gap: 20,
                  marginBottom: 10,
                  paddingRight: 5,
                }}
                className="mt-2 pb-32"
                scrollEnabled={false}
              />
            </>
          </View>
        )}
      </ScrollView>
    </View>
  );
};

export default Index;
