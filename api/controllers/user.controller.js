import pool from "../connection.js";

export const getAllUsers = (req, res, next) => {
  pool.query("SELECT * FROM users ORDER BY id ASC", (error, results) => {
    if (error) {
      next(error);
    }
    res.status(200).json(results.rows);
  });
};

export const getUserById = (req, res, next) => {
  const id = parseInt(req.params.id, 10);

  pool.query("SELECT * FROM users WHERE id = $1", [id], (error, results) => {
    if (error) return next(error);
    res.status(200).json(results.rows);
  });
};

export const createUser = (req, res, next) => {
  const { name, email } = req.body;

  pool.query(
    "INSERT INTO users (name, email) VALUES ($1, $2) RETURNING *",
    [name, email],
    (error, results) => {
      if (error) next(error);
      res.status(200).json(`User added with ID: ${results.rows[0].id}`);
    }
  );
};

export const updateUser = (req, res, next) => {
  const id = parseInt(req.params.id, 10);

  const { name, email } = req.body;

  pool.query(
    "UPDATE users SET name = $1, email = $2 WHERE id = $3",
    [name, email, id],
    (error) => {
      if (error) next(error);
      res.status(200).json("User updated successfully!");
    }
  );
};

export const deleteUser = (req, res, next) => {
  const id = parseInt(req.params.id, 10);

  pool.query("DELETE FROM users WHERE id = $1", [id], (error) => {
    if (error) next(error);
    res.status(200).json("User deleted with success!");
  });
};
