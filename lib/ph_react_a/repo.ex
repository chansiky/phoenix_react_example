defmodule PhReactA.Repo do
  use Ecto.Repo,
    otp_app: :ph_react_a,
    adapter: Ecto.Adapters.Postgres
end
