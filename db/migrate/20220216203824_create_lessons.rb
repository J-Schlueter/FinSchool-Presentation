class CreateLessons < ActiveRecord::Migration[6.1]
  def change
    create_table :lessons do |t|
      t.string :topic
      t.string :infotype
      t.string :video_link
      t.string :lesson_content

      t.timestamps
    end
  end
end
