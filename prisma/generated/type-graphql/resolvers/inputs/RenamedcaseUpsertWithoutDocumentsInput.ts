import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { RenamedcaseCreateWithoutDocumentsInput } from "../inputs/RenamedcaseCreateWithoutDocumentsInput";
import { RenamedcaseUpdateWithoutDocumentsInput } from "../inputs/RenamedcaseUpdateWithoutDocumentsInput";

@TypeGraphQL.InputType({
  isAbstract: true
})
export class RenamedcaseUpsertWithoutDocumentsInput {
  @TypeGraphQL.Field(_type => RenamedcaseUpdateWithoutDocumentsInput, {
    nullable: false
  })
  update!: RenamedcaseUpdateWithoutDocumentsInput;

  @TypeGraphQL.Field(_type => RenamedcaseCreateWithoutDocumentsInput, {
    nullable: false
  })
  create!: RenamedcaseCreateWithoutDocumentsInput;
}
