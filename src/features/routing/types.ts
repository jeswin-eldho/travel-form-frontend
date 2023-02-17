export type NavTile = {
  title: string;
  redirectTo: string;
  icon: (isActive: boolean) => JSX.Element;
};
