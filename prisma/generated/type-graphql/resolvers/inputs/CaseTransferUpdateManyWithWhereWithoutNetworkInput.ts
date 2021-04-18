import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { CaseTransferScalarWhereInput } from "../inputs/CaseTransferScalarWhereInput";
import { CaseTransferUpdateManyMutationInput } from "../inputs/CaseTransferUpdateManyMutationInput";

@TypeGraphQL.InputType({
  isAbstract: true
})
export class CaseTransferUpdateManyWithWhereWithoutNetworkInput {
  @TypeGraphQL.Field(_type => CaseTransferScalarWhereInput, {
    nullable: false
  })
  where!: CaseTransferScalarWhereInput;

  @TypeGraphQL.Field(_type => CaseTransferUpdateManyMutationInput, {
    nullable: false
  })
  data!: CaseTransferUpdateManyMutationInput;
}
