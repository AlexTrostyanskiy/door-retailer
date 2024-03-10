import { TfiShoppingCartFull } from "react-icons/tfi";
import { defineField, defineType } from "sanity";

export default defineType({
  name: "door",
  title: "Дверь",
  description: "",
  type: "document",
  icon: TfiShoppingCartFull,
  fields: [
    defineField({
      name: "name",
      title: "Name",
      type: "string",
      validation: (rule) => rule.required()
    }),
    defineField({
      name: "description",
      title: "Description",
      type: "text"
    }),
    defineField({
      name: "slug",
      title: "Slug",
      type: "slug",
      validation: (rule) => rule.required()
    }),
    defineField({
      name: "reference",
      title: "Reference",
      type: "string",
      validation: (rule) => rule.required()
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
      validation: (rule) => rule.required()
    }),
    defineField({
      name: "variants",
      title: "Variants",
      type: "array",
      of: [
        {
          type: "reference",
          to: {
            type: "variant"
          }
        }
      ],
      validation: (rule) => rule.required()
    })
  ],

  preview: {
    select: {
      title: "name",
      subtitle: "slug.current",
      media: "images.0.images"
    },
    prepare({ title, subtitle, media }) {
      return {
        title: title,
        subtitle: `/${subtitle}`,
        media: media
      };
    }
  }
});
