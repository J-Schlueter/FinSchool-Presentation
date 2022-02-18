class LessonSerializer < ActiveModel::Serializer
  attributes :id, :topic, :infotype, :video_link, :lesson_content, :comments
end
