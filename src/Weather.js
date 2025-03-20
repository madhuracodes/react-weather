import React from "react";

export default function Weather() {
  return (
    <form>
      <input type="search" placeholder="type a city" />
      <input type="submit" value="search" />
      <input type="submit" value="Current" />
    </form>
  );
}
