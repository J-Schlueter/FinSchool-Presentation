# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)
puts "Creating data..."

User.create([
    {
      username: "Joshua",
      password: "access"
    },
    {
      username: "Tester",
      password: "123"
    },
  ])

Lesson.create([
    {
        topic: "Budgeting",
        infotype: "Info",
        video_link: "https://www.youtube.com/embed/sVKQn2I4HDM",
        lesson_content: "How to budget money
        Calculate your monthly income, pick a budgeting method and monitor your progress.
        
        Try the 50/30/20 rule as a simple budgeting framework.
        
        Allow up to 50% of your income for needs.
        
        Leave 30% of your income for wants.
        
        Commit 20% of your income to savings and debt repayment.
        
        Track and manage your budget through regular check-ins."
    },
    {
        topic: "Stocks",
        infotype: "Info",
        video_link: "https://www.youtube.com/embed/ZCFkWDdmXG8",
        lesson_content: "A stock (also known as equity) is a security that represents the ownership of a fraction of a corporation. This entitles the owner of the stock to a proportion of the corporation's assets and profits equal to how much stock they own. Units of stock are called shares"
    }
])


Comment.create([
  {
    text: "I liked this lesson a lot.",
    user_id: 2,
    lesson_id: 1
  }
])

puts "Data intialized."
