json.pokemon do
  json.extract! @pokemon, :name, :attack, :defense, :poke_type, :image_url
end

json.moves @pokemon.moves
json.items @pokemon.items