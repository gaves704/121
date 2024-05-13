/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.seed = async function (knex) {
  await knex("Users").del();
  await knex("VIP_users").del();
  await knex("VIP_room").del();
  await knex("Kafe_or_Shop").del();
  await knex("Flights").del();

  await knex("Users").insert([
    { name: "John Doe", email: "john@example.com", password: "password123" },
    { name: "Jane Smith", email: "jane@example.com", password: "qwerty456" },
    { name: "Alice Johnson", email: "alice@example.com", password: "passpass" },
    { name: "Bob Brown", email: "bob@example.com", password: "secret" },
    { name: "Emma Davis", email: "emma@example.com", password: "123456" },
  ]);

  await knex("VIP_users").insert([
    { idUser: 1, passportNumber: "1234567890", phone: "12345678901" },
    { idUser: 2, passportNumber: "0987654321", phone: "98765432109" },
    { idUser: 3, passportNumber: "1111111111", phone: "11111111111" },
    { idUser: 4, passportNumber: "2222222222", phone: "22222222222" },
    { idUser: 5, passportNumber: "3333333333", phone: "33333333333" },
  ]);

  await knex("VIP_room").insert([
    { price: 100.0, name: "VIP Suite", photo: "vip_suite.jpg" },
    { price: 75.0, name: "Executive Lounge", photo: "executive_lounge.jpg" },
    {
      price: 120.0,
      name: "Presidential Suite",
      photo: "presidential_suite.jpg",
    },
    { price: 80.0, name: "Royal Room", photo: "royal_room.jpg" },
    { price: 150.0, name: "Luxury Penthouse", photo: "luxury_penthouse.jpg" },
  ]);

  await knex("Kafe_or_Shop").insert([
    {
      photo: "cafe_photo.jpg",
      name: "Coffee Corner",
      signature: "Best coffee in town",
      floor: 1,
      type: "кафе",
    },
    {
      photo: "shop_photo.jpg",
      name: "Fashion Boutique",
      signature: "Trendy clothes and accessories",
      floor: 2,
      type: "магазин",
    },
    {
      photo: "restaurant_photo.jpg",
      name: "Gourmet Restaurant",
      signature: "Fine dining experience",
      floor: 3,
      type: "кафе",
    },
    {
      photo: "bookstore_photo.jpg",
      name: "Bookworm Bookstore",
      signature: "Wide selection of books",
      floor: 1,
      type: "магазин",
    },
    {
      photo: "bakery_photo.jpg",
      name: "Bakery Delights",
      signature: "Freshly baked goods daily",
      floor: 2,
      type: "кафе",
    },
  ]);

  await knex("Flights").insert([
    {
      time: "08:00",
      direction: "London",
      aviaComp: "British Airways",
      terminal: "А",
      type: "вылет",
    },
    {
      time: "10:30",
      direction: "Paris",
      aviaComp: "Air France",
      terminal: "В",
      type: "вылет",
    },
    {
      time: "12:45",
      direction: "New York",
      aviaComp: "Delta Air Lines",
      terminal: "А",
      type: "прилет",
    },
    {
      time: "15:20",
      direction: "Tokyo",
      aviaComp: "Japan Airlines",
      terminal: "В",
      type: "вылет",
    },
    {
      time: "18:00",
      direction: "Dubai",
      aviaComp: "Emirates",
      terminal: "В",
      type: "прилет",
    },
  ]);
};
