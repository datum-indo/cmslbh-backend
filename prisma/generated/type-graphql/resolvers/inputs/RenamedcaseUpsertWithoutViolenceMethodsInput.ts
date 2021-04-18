import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { RenamedcaseCreateWithoutViolenceMethodsInput } from "../inputs/RenamedcaseCreateWithoutViolenceMethodsInput";
import { RenamedcaseUpdateWithoutViolenceMethodsInput } from "../inputs/RenamedcaseUpdateWithoutViolenceMethodsInput";

@TypeGraphQL.InputType({
  isAbstract: true
})
export class RenamedcaseUpsertWithoutViolenceMethodsInput {
  @TypeGraphQL.Field(_type => RenamedcaseUpdateWithoutViolenceMethodsInput, {
    nullable: false
  })
  update!: RenamedcaseUpdateWithoutViolenceMethodsInput;

  @TypeGraphQL.Field(_type => RenamedcaseCreateWithoutViolenceMethodsInput, {
    nullable: false
  })
  create!: RenamedcaseCreateWithoutViolenceMethodsInput;
}
