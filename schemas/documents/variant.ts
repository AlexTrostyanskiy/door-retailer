import { VscTypeHierarchySub } from "react-icons/vsc";
import { defineField, defineType } from "sanity";

export default defineType({
  name: "variant",
  title: "Variant",
  description: "",
  type: "document",
  icon: VscTypeHierarchySub,
  fields: [
    defineField({
      name: "name",
      title: "Name",
      type: "string",
      validation: (rule) => rule.required().error("A name is required")
    }),
    defineField({
      name: "code",
      title: "Code",
      type: "string",
      validation: (rule) => rule.required().error("A variant code is required")
    }),
    defineField({
      name: "description",
      title: "Description",
      type: "text"
    }),
    defineField({
      name: "images",
      title: "Images",
      type: "array",
      of: [
        {
          type: "reference",
          to: {
            type: "doorImage"
          }
        }
      ],
      validation: (rule) => rule.required().error("One or more images are required")
    })
  ],

  preview: {
    select: {
      title: "name",
      media: "images.0.images"
    }
  }
});
