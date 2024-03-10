import { BiCheckboxSquare } from "react-icons/bi";
import { defineField, defineType } from "sanity";

export default defineType({
  name: "taxon",
  title: "Taxon",
  description: "",
  type: "document",
  icon: BiCheckboxSquare,
  fields: [
    defineField({
      name: "name",
      title: "Name",
      type: "string",
      validation: (rule) => rule.required().error("A name is required")
    }),
    defineField({
      name: "label",
      title: "Label",
      type: "string"
    }),
    defineField({
      name: "slug",
      title: "Slug",
      type: "slug",
      options: {
        source: "Name"
      },
      validation: (rule) => rule.required().error("A slug is required")
    }),
    defineField({
      name: "description",
      title: "Description",
      type: "text"
    }),
    defineField({
      name: "products",
      title: "Products",
      type: "array",
      of: [
        {
          type: "reference",
          to: {
            type: "door"
          }
        }
      ],
      validation: (rule) => rule.warning("One or more products are required")
    }),
    defineField({
      name: "taxons",
      title: "Taxons",
      type: "array",
      of: [
        {
          type: "reference",
          to: {
            type: "taxon"
          }
        }
      ]
    })
  ],

  preview: {
    select: {
      title: "name"
    }
  }
});
