import classes from "./MastHead.module.css";

function MastHead() {
  return (
    <div
      className={
        classes.mastText +
        " " +
        classes.animated +
        " " +
        classes.animatedFadeInUp +
        " " +
        classes.fadeInUp
      }
    >
      <h1 className={classes.mastTitle}>ashwin sathian</h1>
      <div className={classes.mastSubtitleContainer}>
        <h2 className={classes.mastSubtitle}>Web Application Developer</h2>
        <h2 className={classes.mastSubtitle}>Blogger</h2>
      </div>
    </div>
  );
}

export default MastHead;
