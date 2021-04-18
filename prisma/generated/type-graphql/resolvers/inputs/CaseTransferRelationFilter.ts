import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { CaseTransferWhereInput } from "../inputs/CaseTransferWhereInput";

@TypeGraphQL.InputType({
  isAbstract: true
})
export class CaseTransferRelationFilter {
  @TypeGraphQL.Field(_type => CaseTransferWhereInput, {
    nullable: true
  })
  is?: CaseTransferWhereInput | undefined;

  @TypeGraphQL.Field(_type => CaseTransferWhereInput, {
    nullable: true
  })
  isNot?: CaseTransferWhereInput | undefined;
}
