import { Image, StyleSheet, View } from "react-native";
import { SvgUri } from "react-native-svg";

type UserAvatarProps = {
  initials?: string;
};

const profileUri = Image.resolveAssetSource(require("../../assets/profile.svg")).uri;

export function UserAvatar({ initials: _initials }: UserAvatarProps) {
  return (
    <View style={styles.avatar}>
      <SvgUri uri={profileUri} width="100%" height="100%" />
    </View>
  );
}

const styles = StyleSheet.create({
  avatar: {
    width: 54,
    height: 54,
    borderRadius: 40,
    overflow: "hidden",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#444B57",
  },
});
