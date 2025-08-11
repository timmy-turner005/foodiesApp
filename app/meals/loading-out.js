import classes from "./loading.module.css";

export default function MealsLoadingPage() {
  return <p className={classes.loading}>Fetching Meals</p>;
}
// This component is used to show a loading state while meals are being fetched.
