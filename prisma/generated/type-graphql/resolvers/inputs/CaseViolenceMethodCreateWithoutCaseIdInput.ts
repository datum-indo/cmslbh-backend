import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";

@TypeGraphQL.InputType({
  isAbstract: true
})
export class CaseViolenceMethodCreateWithoutCaseIdInput {
  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  kodeMt?: string | undefined;
}
