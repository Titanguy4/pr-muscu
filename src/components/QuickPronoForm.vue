<template>
  <div id="quickpronoform-container">
    <div id="quickpronoform-description">
      <h2>Faire un pronostique</h2>
      <p>Parié sur un des compétiteur pour peut-être gagner quelque chose...</p>
    </div>
    <form class="quick-prono-form">
      <select class="full-width-select">
        <option disabled selected>Choisissez une possibilité</option>
        <option value="option1">Possibilité 1</option>
        <option value="option2">Possibilité 2</option>
        <option value="option3">Possibilité 3</option>
      </select>
      <div class="numbers-row">
        <input type="number" placeholder="Nombre 1" min="0" />
        <input type="number" placeholder="Nombre 2" min="0" />
        <input type="number" placeholder="Nombre 3" min="0" />
      </div>
      <button type="submit">Valider</button>
    </form>
  </div>
</template>

<style scoped>
#quickpronoform-container {
  padding: 2em;
  display: flex;
  flex-direction: column;
  row-gap: 20px;
  background: var(--color-principale, #f0e4c3);
  border-radius: 16px;
  box-shadow: 0 4px 24px rgba(0, 0, 0, 0.08);
  border: 5px solid black;
}

#quickpronoform-description {
  display: flex;
  flex-direction: column;
}

.quick-prono-form {
  display: flex;
  flex-direction: column;
  gap: 24px;
  margin: 0 auto;
  padding: 32px 24px;
}

.full-width-select {
  width: 100%;
  padding: 12px;
  font-size: 1.1rem;
  border-radius: 8px;
  border: 1px solid #ccc;
  box-sizing: border-box;
}

.numbers-row {
  display: flex;
  gap: 16px;
}

.numbers-row input[type='number'] {
  flex: 1;
  padding: 12px;
  font-size: 1rem;
  border-radius: 8px;
  border: 1px solid #ccc;
  box-sizing: border-box;
}

button[type='submit'] {
  padding: 12px;
  font-size: 1.1rem;
  background: black;
  color: #fff;
  border: none;
  border-radius: 8px;
  cursor: pointer;
  transition: background 0.2s;
}

button[type='submit']:hover {
  background: #00995a;
}
</style>
