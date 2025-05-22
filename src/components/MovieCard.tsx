import { Link } from "expo-router";
import * as React from "react";
import { TouchableOpacity } from "react-native";
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
  <Link href={`/movie/${item.id}`}asChild>
    <TouchableOpacity className="w-[30%]">
    <Card>
      <Card.Cover
      className="w-full"
        source={{
          uri: item.poster_path
            ? `https://image.tmdb.org/t/p/w500${item.poster_path}`
            : `https://placeholder.co/600*400/1a1a1a/ffffff.png`,
        }}
      />
   
      <Card.Content className=" p-1 m-1">
        <Text variant="titleSmall">{item.original_title.slice(0,5)}...</Text>
        <Text variant="bodySmall">
          {" "}
          <Icon name="star" size={10} color="#FFD700" />{" "}
          {Math.round(item.vote_average / 2)}
        </Text>
        <Text variant="bodySmall">
        {item.release_date?.split('_')[0].split}
        </Text>
      </Card.Content>
    </Card>
    </TouchableOpacity>
  </Link>
);

export default MovieCard;
