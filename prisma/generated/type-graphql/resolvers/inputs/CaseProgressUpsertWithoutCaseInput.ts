import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { CaseProgressCreateWithoutCaseInput } from "../inputs/CaseProgressCreateWithoutCaseInput";
import { CaseProgressUpdateWithoutCaseInput } from "../inputs/CaseProgressUpdateWithoutCaseInput";

@TypeGraphQL.InputType({
  isAbstract: true
})
export class CaseProgressUpsertWithoutCaseInput {
  @TypeGraphQL.Field(_type => CaseProgressUpdateWithoutCaseInput, {
    nullable: false
  })
  update!: CaseProgressUpdateWithoutCaseInput;

  @TypeGraphQL.Field(_type => CaseProgressCreateWithoutCaseInput, {
    nullable: false
  })
  create!: CaseProgressCreateWithoutCaseInput;
}
