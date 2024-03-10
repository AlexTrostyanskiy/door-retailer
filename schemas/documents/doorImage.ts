import { ImImages } from "react-icons/im";
import { defineField, defineType } from "sanity";

export default defineType({
  name: "doorImage",
  title: "Фото двери",
  type: "document",
  icon: ImImages,
  fields: [
    defineField({
      name: "name",
      title: "Name",
      type: "string",
      validation: (rule) => rule.required().error("A name is required")
    }),
    defineField({
      name: "description",
      title: "Description",
      type: "text"
    }),
    defineField({
      name: "images",
      title: "Images",
      type: "image",
      validation: (rule) => rule.required().error("One or more images are required")
    })
  ],

  preview: {
    select: {
      title: "name",
      media: "images"
    }
  }
});
