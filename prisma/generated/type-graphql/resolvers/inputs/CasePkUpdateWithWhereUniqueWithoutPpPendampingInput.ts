import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { CasePkUpdateWithoutPpPendampingInput } from "../inputs/CasePkUpdateWithoutPpPendampingInput";
import { CasePkWhereUniqueInput } from "../inputs/CasePkWhereUniqueInput";

@TypeGraphQL.InputType({
  isAbstract: true
})
export class CasePkUpdateWithWhereUniqueWithoutPpPendampingInput {
  @TypeGraphQL.Field(_type => CasePkWhereUniqueInput, {
    nullable: false
  })
  where!: CasePkWhereUniqueInput;

  @TypeGraphQL.Field(_type => CasePkUpdateWithoutPpPendampingInput, {
    nullable: false
  })
  data!: CasePkUpdateWithoutPpPendampingInput;
}
