import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { RenamedcaseCreateNestedOneWithoutClassificationsInput } from "../inputs/RenamedcaseCreateNestedOneWithoutClassificationsInput";

@TypeGraphQL.InputType({
  isAbstract: true
})
export class CaseClassificationCreateInput {
  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  kodeMt?: string | undefined;

  @TypeGraphQL.Field(_type => RenamedcaseCreateNestedOneWithoutClassificationsInput, {
    nullable: true
  })
  caseId?: RenamedcaseCreateNestedOneWithoutClassificationsInput | undefined;
}
