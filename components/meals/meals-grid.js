import MealItem from "./meal-item";
import classes from "./meals-grid.module.css";

export default function MealsGrid({ meals }) {
  return (
    <ul className={classes.meals}>
      {meals.map((meal) => (
        <li key={meal.id}>
          <MealItem {...meal} />
        </li>
      ))}
    </ul>
  );
}

// export default function MealsGrid({ meals }) {
//     return (
//         <ul className={classes.meals}>
//         {meals.map((meal) => (
//             <li key={meal.id} className={classes.item}>
//             <Link href={`/meals/${meal.id}`}>
//                 <div className={classes.image}>
//                 <Image
//                     src={meal.image}
//                     alt={meal.title}
//                     width={300}
//                     height={200}
//                 />
//                 </div>
//                 <h3>{meal.title}</h3>
//             </Link>
//             </li>
//         ))}
//         </ul>
//     );
// }
