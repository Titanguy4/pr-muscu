<template>
  <nav>
    <RouterLink to="/">
      <div id="title-logo">
        <img src="" alt="" />
        <p id="title">PR-Muscu</p>
      </div>
    </RouterLink>

    <div id="navigation-links">
      <RouterLink to="/">Home</RouterLink>
      <RouterLink to="/about">About</RouterLink>
    </div>
  </nav>
</template>

<style scoped>
nav {
  position: sticky;
  top: 0;
  z-index: 1000;
  min-height: 10vh;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 5%;
  background: rgba(0, 56, 32, 0.7);
  backdrop-filter: blur(10px);
  border-bottom: 1px solid rgba(240, 228, 195, 0.2);
}

#title-logo {
  display: flex;
  align-items: center;
  gap: 10px;
  color: #f0e4c3;
  text-decoration: none;
  font-size: 1.5rem;
  font-weight: bold;
}

#navigation-links {
  display: flex;
  justify-content: center;
  gap: 40px;
}

#navigation-links a {
  color: #f0e4c3;
  text-decoration: none;
  font-weight: 500;
  transition: color 0.3s ease;
}

#navigation-links a:hover {
  color: #00b273;
}
</style>
