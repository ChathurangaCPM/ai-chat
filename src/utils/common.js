import theme from "../themes/theme";

export const stackNavigatorOptions = () => {
    return {
      headerShown: true,
      headerTransparent: true,
      headerStyle: {
        backgroundColor: theme.background.cardBackground,
        // height: 80,
      },
      headerTintColor: theme.colors.primary,
      headerTitleAlign: 'left',
      headerBackTitleVisible: false,
      headerTitleStyle: {
        fontWeight: 'bold',
        fontSize: theme.fontSizes.large + 10,
      },
    };
  };
  