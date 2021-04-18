import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { CasePkCreateWithoutPpPendampingInput } from "../inputs/CasePkCreateWithoutPpPendampingInput";
import { CasePkWhereUniqueInput } from "../inputs/CasePkWhereUniqueInput";

@TypeGraphQL.InputType({
  isAbstract: true
})
export class CasePkCreateOrConnectWithoutPpPendampingInput {
  @TypeGraphQL.Field(_type => CasePkWhereUniqueInput, {
    nullable: false
  })
  where!: CasePkWhereUniqueInput;

  @TypeGraphQL.Field(_type => CasePkCreateWithoutPpPendampingInput, {
    nullable: false
  })
  create!: CasePkCreateWithoutPpPendampingInput;
}
