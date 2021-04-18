import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { CaseProgressActivityLitOrderByInput } from "../../../inputs/CaseProgressActivityLitOrderByInput";
import { CaseProgressActivityLitWhereInput } from "../../../inputs/CaseProgressActivityLitWhereInput";
import { CaseProgressActivityLitWhereUniqueInput } from "../../../inputs/CaseProgressActivityLitWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class AggregateCaseProgressActivityLitArgs {
  @TypeGraphQL.Field(_type => CaseProgressActivityLitWhereInput, {
    nullable: true
  })
  where?: CaseProgressActivityLitWhereInput | undefined;

  @TypeGraphQL.Field(_type => [CaseProgressActivityLitOrderByInput], {
    nullable: true
  })
  orderBy?: CaseProgressActivityLitOrderByInput[] | undefined;

  @TypeGraphQL.Field(_type => CaseProgressActivityLitWhereUniqueInput, {
    nullable: true
  })
  cursor?: CaseProgressActivityLitWhereUniqueInput | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  take?: number | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  skip?: number | undefined;
}
