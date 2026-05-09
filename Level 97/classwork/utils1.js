// level 97:
// 1) მოცემულია სამი ფაილი: logger.js, math.js და app.js.
// logger.js import-ავს math.js-ს, ხოლო math.js import-ავს logger.js.

// შენი დავალებაა:

// გაუშვა კოდი და ნახო რა შედეგი ან შეცდომა გამოდის.
// ახსნა, რატომ ხდება პრობლემა და როგორ მუშაობს
//  JavaScript circular modules.
// იპოვო circular dependency (logger.js → math.js → logger.js).
// გადააკეთო კოდი ისე, რომ ორივე ფაილი აღარ აიმპორტებდეს 
// ერთმანეთს და ლოგიკაც სწორად იმუშაოს (მაგ: შექმენი utils.js და
//  გადანაწილე ფუნქციები).

// 2) მოცემულია სამი ფაილი: user.js, profile.js და app.js.
// user.js import-ავს profile.js-ს, ხოლო profile.js import-ავს
//  user.js.

// შენი დავალებაა:

// გაუშვა კოდი და შეამოწმო შედეგი ან შეცდომა.
// ახსნა, რა პრობლემა წარმოიქმნება და რატომ არის circular dependency.
// მონიშვნა, სად არის წრიული დამოკიდებულება (user.js → profile.js
// → user.js).
// გადააკეთო კოდი ისე, რომ user.js და profile.js დამოუკიდებლად
//  იმუშაონ,
//  ან გამოიყენე მესამე ფაილი (shared.js) საერთო ფუნქციებისთვის.

// 3) მოცემულია სამი ფაილი: user.js, profile.js და app.js.
// user.js import-ავს profile.js-ს, ხოლო profile.js import-ავს user.js.

// შენი დავალებაა:

// გაუშვა კოდი და შეამოწმო შედეგი ან შეცდომა.
// ახსნა, რა პრობლემა წარმოიქმნება და რატომ არის circular dependency.
// მონიშვნა, სად არის წრიული დამოკიდებულება (user.js →
//  profile.js → user.js).
// გადააკეთო კოდი ისე, რომ user.js და profile.js დამოუკიდებლად 
// იმუშაონ, ან გამოიყენე 
// მესამე ფაილი (shared.js) საერთო ფუნქციებისთვის.