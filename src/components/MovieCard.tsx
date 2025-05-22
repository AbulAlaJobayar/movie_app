import { Link } from "expo-router";
import * as React from "react";
import { TouchableOpacity, View } from "react-native";
import { Card, Text } from "react-native-paper";
import Icon from "react-native-vector-icons/FontAwesome";

// const LeftContent = props => <Avatar.Icon {...props} icon="folder" />
export interface IProp {
  item: {
    backdrop_path: string;
    id: number;
    original_title: string;
    title?: string;
    overview?: string;
    poster_path?: string;
    media_type?: string;
    adult?: boolean;
    original_language?: string;
    genre_ids?: number[];
    popularity?: number;
    release_date?: string;
    video?: boolean;
    vote_average: number;
    vote_count?: number;
  };
}
const MovieCard = ({ item }: IProp) => (
  <Link href={`/movie/${item.id}`} asChild>
    <TouchableOpacity
      className="w-[30%] mx-0.5"
      style={{
        margin: 0,
        padding: 0,
        gap: 0,
      }}
    >
      <Card
        style={{
          margin: -10,
          padding: 0,
          elevation: 2, // Optional: adjust shadow if needed
          overflow: "hidden",
          borderRadius: 0,
          borderBottomColor: "black",
          borderWidth: 1,
          maxHeight: 290,
          minHeight: 280,
        }}
      >
        <Card.Cover
          style={{
            margin: 0,
            padding: 0,
            borderRadius: 0, // Remove rounded corners if you want
          }}
          source={{
            uri: item.poster_path
              ? `https://image.tmdb.org/t/p/w500${item.poster_path}`
              : `https://placeholder.co/600*400/1a1a1a/ffffff.png`,
          }}
        />

        <Card.Content
          style={{
            padding: 0,
            margin: 0,
          }}
        >
          <Text>{item.original_title.slice(0, 10)}...</Text>
          <View
            style={{
              flexDirection: "row",
              alignItems: "center",
              justifyContent: "space-between",
              marginRight:14,

            }}
          >
            <Text variant="bodySmall">
              {" "}
              <Icon name="star" size={10} color="#FFD700" />{" "}
              {Math.round(item.vote_average / 2)}
            </Text>
            <Text variant="bodySmall">{item.release_date?.split("-")[0]}</Text>
          </View>
          <Text variant="bodySmall">{item.overview?.split(" ").slice(1,10).join(" ")}...</Text>
        </Card.Content>
      </Card>
    </TouchableOpacity>
  </Link>
);

export default MovieCard;
