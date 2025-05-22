import MovieCard from "@/src/components/MovieCard";
import { fetchMovie } from "@/src/services/api";
import useFetch from "@/src/services/useFetch";
import { useRouter } from "expo-router";
import React, { useEffect, useState } from "react";
import {
  ActivityIndicator,
  FlatList,
  ScrollView,
  Text,
  View,
} from "react-native";
import { Searchbar } from "react-native-paper";

const Search = () => {
  const [searchQuery, setSearchQuery] = useState("");
  console.log(searchQuery);
  const router = useRouter();
  const {
    data: movie,
    loading: movieLoading,
    error: movieError,
    reFetch,
    reset,
  } = useFetch(() => fetchMovie({ query: searchQuery }), false);
  useEffect(() => {
    const timeOutId = setTimeout(async () => {
      if (searchQuery.trim()) {
        await reFetch();
      } else {
        reset();
      }
    }, 500);
    return () => clearInterval(timeOutId);
  }, [searchQuery]);

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
        <FlatList
          data={movie}
          renderItem={({ item }) => {
            return <MovieCard item={item} />;
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
          contentContainerStyle={{
            paddingBottom: 100,
          }}
          ListHeaderComponent={
            <>
              <Text className="w-full h-10 mt-20  text-center mb-10 mx-auto  text-white font-bold text-4xl">
                MOVIE FLIX
              </Text>

              <View className="mb-5">
                <Searchbar
                  placeholder="Search"
                  onChangeText={setSearchQuery}
                  value={searchQuery}
                  onPress={() => router.push("/search")}
                />
              </View>
              {movieLoading && (
                <ActivityIndicator
                  size="large"
                  color="#0000ff"
                  className="mt-10 self-center"
                />
              )}
              {movieError && <Text>Error :{movieError?.message}</Text>}

              {!movieLoading &&
                !movieError &&
                searchQuery.trim() &&
                movie?.length > 0 && (
                  <Text className="text-2xl font-bold text-white mb-5">
                    Search Result For{" "}
                    <Text className="text-accent">{searchQuery}</Text>
                  </Text>
                )}
            </>
          }
          ListEmptyComponent={
            !movieLoading && !movieError ? (
              <View className="mt-10 text-gray-500">
                <Text className="text-center text-gray-500 font-bold text-2xl">
                  {searchQuery.trim()
                    ? "No movies found"
                    : "Search for a movie"}
                </Text>
              </View>
            ) : null
          }
        />
      </ScrollView>
    </View>
  );
};

export default Search;
