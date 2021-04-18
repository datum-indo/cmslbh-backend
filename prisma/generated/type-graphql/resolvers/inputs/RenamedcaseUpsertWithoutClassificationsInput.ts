import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { RenamedcaseCreateWithoutClassificationsInput } from "../inputs/RenamedcaseCreateWithoutClassificationsInput";
import { RenamedcaseUpdateWithoutClassificationsInput } from "../inputs/RenamedcaseUpdateWithoutClassificationsInput";

@TypeGraphQL.InputType({
  isAbstract: true
})
export class RenamedcaseUpsertWithoutClassificationsInput {
  @TypeGraphQL.Field(_type => RenamedcaseUpdateWithoutClassificationsInput, {
    nullable: false
  })
  update!: RenamedcaseUpdateWithoutClassificationsInput;

  @TypeGraphQL.Field(_type => RenamedcaseCreateWithoutClassificationsInput, {
    nullable: false
  })
  create!: RenamedcaseCreateWithoutClassificationsInput;
}
